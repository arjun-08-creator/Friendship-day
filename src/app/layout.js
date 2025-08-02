export const metadata = {
  title: 'Friendship Day',
  description: 'Made with love 💖',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
