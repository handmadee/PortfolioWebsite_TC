import { ImageResponse } from 'next/og';

// Icon sizes
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Icon generator
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0a192f',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2dd4bf',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          border: '2px solid #2dd4bf',
          borderRadius: '8px',
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
