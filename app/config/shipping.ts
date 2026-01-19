export const SHIPPING_CONFIG = {
    freeShippingThreshold: 50,
    standardShippingCost: 8.99,
    expeditedShippingCost: 50,
} as const;

export type ShippingMethod = 'standard' | 'expedited';

export function calculateShippingCost(
    cartTotal: number,
    shippingMethod: ShippingMethod
): number {
    // Free shipping for orders over threshold, regardless of method
    if (cartTotal >= SHIPPING_CONFIG.freeShippingThreshold) {
        return shippingMethod === 'expedited' ? SHIPPING_CONFIG.expeditedShippingCost : 0;
    }

    // Below threshold, charge based on method
    return shippingMethod === 'expedited'
        ? SHIPPING_CONFIG.standardShippingCost + SHIPPING_CONFIG.expeditedShippingCost
        : SHIPPING_CONFIG.standardShippingCost;
}
