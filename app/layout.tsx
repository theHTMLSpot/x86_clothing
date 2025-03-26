import { CartProvider } from './contexts/CartContext'; // Import your CartContext

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children} {/* This will give access to cart context in the whole app */}
        </CartProvider>
      </body>
    </html>
  );
}
