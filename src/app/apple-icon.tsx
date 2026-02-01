import { ImageResponse } from 'next/og';

// Apple icon sizes
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

// Apple touch icon generator
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2dd4bf',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          border: '8px solid #2dd4bf',
          borderRadius: '40px',
        }}
      >
        TC
      </div>
    ),
    {
      ...size,
    }
  );
}
