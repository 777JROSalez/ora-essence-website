#!/usr/bin/env python3
"""
Aggressive background whitening for specific problem images.
Uses a more aggressive approach to ensure pure white backgrounds.
"""

from PIL import Image
import numpy as np
from pathlib import Path

def aggressive_whiten(input_path, output_path):
    """
    Aggressively replace all light backgrounds with pure white.
    Replaces any pixel with RGB >= 200 in all channels with #FFFFFF.
    """
    print(f"Processing: {Path(input_path).name}")
    
    # Open image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Find all "light" pixels (RGB >= 200 in all channels)
    # These are likely background or shadows on background
    mask = (
        (data[:,:,0] >= 200) &
        (data[:,:,1] >= 200) &
        (data[:,:,2] >= 200)
    )
    
    # Count pixels to be changed
    count = mask.sum()
    print(f"  Whitening {count:,} pixels")
    
    # Replace with pure white
    data[mask] = [255, 255, 255, 255]
    
    # Save result
    result = Image.fromarray(data, 'RGBA')
    result.save(output_path, 'PNG')
    print(f"  → Saved: {Path(output_path).name}")

def main():
    images_dir = Path("/Users/daga/Desktop/Anti - Project/public/images")
    
    # Problem images that need aggressive processing
    problem_images = [
        "lumina_led_mask.png",
        "aurum_sculpting_wand.png"
    ]
    
    print("=== AGGRESSIVE Background Whitening ===")
    print(f"Processing {len(problem_images)} images...")
    print("Threshold: RGB >= 200\n")
    
    for image_name in problem_images:
        # Use original backup
        input_path = images_dir / f"{Path(image_name).stem}_original{Path(image_name).suffix}"
        output_path = images_dir / image_name
        
        if not input_path.exists():
            print(f"⚠️  Skipping {image_name} (backup not found)")
            continue
        
        aggressive_whiten(input_path, output_path)
    
    print("\n✅ Aggressive processing complete!")

if __name__ == "__main__":
    main()
