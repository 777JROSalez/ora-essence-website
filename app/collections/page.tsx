import { redirect } from 'next/navigation';

/**
 * /collections route redirects to /products since all product listing
 * is handled under the /products path. This prevents 404 errors from
 * any stale links referencing the /collections route.
 */
export default function CollectionsPage() {
    redirect('/products');
}
