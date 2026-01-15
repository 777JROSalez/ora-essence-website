#!/usr/bin/env python3
"""
IMPROVED Image Background Whitening Script
Intelligently detects the background color by sampling edges,
then replaces all similar pixels with pure white (#FFFFFF)
"""

from PIL import Image
import numpy as np
from pathlib import Path

def smart_whiten_background(input_path, output_path):
    """
    Intelligently detect and replace background with pure white.
    
    Args:
        input_path: Path to input image
        output_path: Path to save processed image
    """
    print(f"Processing: {Path(input_path).name}")
    
    # Open image and convert to RGB
    img = Image.open(input_path).convert("RGB")
    data = np.array(img)
    height, width = data.shape[:2]
    
    # Sample edge pixels to find the background color
    edge_pixels = []
    
    # Top edge
    edge_pixels.extend(data[0:5, :].reshape(-1, 3).tolist())
    # Bottom edge
    edge_pixels.extend(data[-5:, :].reshape(-1, 3).tolist())
    # Left edge
    edge_pixels.extend(data[:, 0:5].reshape(-1, 3).tolist())
    # Right edge
    edge_pixels.extend(data[:, -5:].reshape(-1, 3).tolist())
    
    # Find the lightest (highest RGB) pixel as the background reference
    edge_pixels_array = np.array(edge_pixels)
    brightness = edge_pixels_array.sum(axis=1)
    lightest_idx = brightness.argmax()
    bg_color = edge_pixels_array[lightest_idx]
    
    print(f"  Detected background: RGB{tuple(bg_color)}")
    
    # Replace all pixels similar to background with pure white
    # Use a tolerance of 15 RGB units
    tolerance = 15
    mask = (
        (np.abs(data[:,:,0] - bg_color[0]) <= tolerance) &
        (np.abs(data[:,:,1] - bg_color[1]) <= tolerance) &
        (np.abs(data[:,:,2] - bg_color[2]) <= tolerance)
    )
    
    # Convert to RGBA to preserve transparency if needed
    result_data = np.dstack([data, np.full((height, width), 255, dtype=np.uint8)])
    result_data[mask] = [255, 255, 255, 255]
    
    # Save result
    result = Image.fromarray(result_data, 'RGBA')
    result.save(output_path, 'PNG')
    print(f"  → Saved: {Path(output_path).name}")

def main():
    # Define image directory
    images_dir = Path("/Users/daga/Desktop/Anti - Project/public/images")
    
    # List of product images to process
    product_images = [
        "regenerating_cleanser.png",
        "holiday_lip_blush_kit.png",
        "aurum_sculpting_wand.png",
        "lumina_led_mask.png",
        "midnight_recovery_oil.png",
        "diamond_dust_exfoliator.png",
        "gold_sheet_masks.png",
        "renewal_face_oil.png",
        "radiant_glow_body_butter.png",
        "purifying_cleanser.png",
        "revitalizing_toner.png",
        "advanced_repair_serum.png",
        "vitality_barrier_cream.png",
        "vitality_barrier_cream_set.png"
    ]
    
    print("=== SMART Image Background Whitening ===")
    print(f"Processing {len(product_images)} images...")
    print("Using intelligent edge detection\n")
    
    for image_name in product_images:
        # Use original backup
        input_path = images_dir / f"{Path(image_name).stem}_original{Path(image_name).suffix}"
        output_path = images_dir / image_name
        
        if not input_path.exists():
            print(f"⚠️  Skipping {image_name} (backup not found)")
            continue
        
        smart_whiten_background(input_path, output_path)
    
    print("\n✅ All images processed with smart background detection!")

if __name__ == "__main__":
    main()
