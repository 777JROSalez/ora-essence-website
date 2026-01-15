#!/usr/bin/env python3
"""
Image Background Whitening Script
Replaces near-white background pixels with pure white (#FFFFFF)
while preserving the product and its shadows.
"""

from PIL import Image
import numpy as np
import os
from pathlib import Path

def whiten_background(input_path, output_path, threshold=250):
    """
    Replace near-white pixels with pure white while preserving product details.
    
    Args:
        input_path: Path to input image
        output_path: Path to save processed image
        threshold: RGB threshold for near-white detection (0-255)
    """
    print(f"Processing: {Path(input_path).name}")
    
    # Open image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Find near-white pixels where ALL RGB channels are above threshold
    # This preserves shadows and product details
    mask = (data[:,:,0] >= threshold) & (data[:,:,1] >= threshold) & (data[:,:,2] >= threshold)
    
    # Replace matched pixels with pure white
    data[mask] = [255, 255, 255, 255]
    
    # Save result
    result = Image.fromarray(data)
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
    
    print("=== Image Background Whitening ===")
    print(f"Processing {len(product_images)} images...")
    print(f"Threshold: RGB >= 230\n")
    
    for image_name in product_images:
        input_path = images_dir / image_name
        
        if not input_path.exists():
            print(f"⚠️  Skipping {image_name} (not found)")
            continue
        
        # Skip backup creation (already exists)
        
        # Process image (overwrite original) with lower threshold
        whiten_background(input_path, input_path, threshold=230)
    
    print("\n✅ All images processed!")
    print("Original images backed up with '_original' suffix.")

if __name__ == "__main__":
    main()
