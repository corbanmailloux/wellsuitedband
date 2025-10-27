import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Well Suited Band'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Logo */}
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/images/logo-white-bg.svg`}
          alt="Well Suited Logo"
          tw="w-64 h-64"
        />
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}
        >
          Well Suited
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#EDAA49', // brand-yellow color
            marginTop: 10,
          }}
        >
          Rock/Alternative/Americana Band
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
