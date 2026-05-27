import React from 'react'
import Head from 'next/head'

const Metadata = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="theme-color" content="#020617" />

      <title>ForgeUI Studio</title>

      <meta
        name="description"
        content="Visual embedded UI designer and LVGL workflow platform for ESP32-P4."
      />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link rel="manifest" href="/site.webmanifest" />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content="ForgeUI Studio" />

      <meta
        property="og:description"
        content="Visual embedded UI designer and LVGL workflow platform for ESP32-P4."
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content="ForgeUI Studio" />

      <meta
        name="twitter:description"
        content="Visual embedded UI designer and LVGL workflow platform for ESP32-P4."
      />
    </Head>
  )
}

export default Metadata