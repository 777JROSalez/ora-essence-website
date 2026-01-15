#!/usr/bin/env python3
"""
Ultra-aggressive background whitening specifically for Lumina LED Mask.
Uses threshold RGB >= 150 to catch even darker background shadows.
"""

from PIL import Image
import numpy as np
from pathlib import Path

def ultra_whiten(input_path, output_path, threshold=150):
    """
    Ultra-aggressively replace backgrounds with pure white.
    Uses a low threshold to catch even subtle shadows.
    """
    print(f"Processing: {Path(input_path).name}")
    print(f"  Threshold: RGB >= {threshold}")
    
    # Open image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Sample the actual corner pixels to see what we're dealing with
    h, w = data.shape[:2]
    corners = [
        (1, 1), (w-2, 1), (1, h-2), (w-2, h-2)
    ]
    print(f"  Corner samples:")
    for y, x in corners:
        px = data[y, x]
        print(f"    ({x:4d}, {y:4d}): RGB({px[0]:3d}, {px[1]:3d}, {px[2]:3d})")
    
    # Find all pixels where R, G, and B are ALL >= threshold
    mask = (
        (data[:,:,0] >= threshold) &
        (data[:,:,1] >= threshold) &
        (data[:,:,2] >= threshold)
    )
    
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
    
    # Ultra-aggressive processing for Lumina LED Mask
    image_name = "lumina_led_mask.png"
    input_path = images_dir / f"{Path(image_name).stem}_original{Path(image_name).suffix}"
    output_path = images_dir / image_name
    
    print("=== ULTRA-AGGRESSIVE Background Whitening ===\n")
    
    if not input_path.exists():
        print(f"⚠️  Error: {input_path} not found")
        return
    
    ultra_whiten(input_path, output_path, threshold=150)
    
    print("\n✅ Ultra-aggressive processing complete!")

if __name__ == "__main__":
    main()
