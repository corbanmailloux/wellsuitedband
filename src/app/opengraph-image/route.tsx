import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const revalidate = false

export async function GET(request: NextRequest) {
  const size = {
    width: 1200,
    height: 630,
  }

  try {
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
            src="/images/logo-white-bg.svg"
            alt="Well Suited Logo"
            width={256}
            height={256}
            style={{
              margin: '0 auto',
            }}
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
  } catch (error) {
    return new Response('Failed to generate image', { status: 500 })
  }
}
