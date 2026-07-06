import Image from 'next/image'

export default function Watermark() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{
      backgroundImage: 'url(/milyogo-watermark.png)',
      backgroundRepeat: 'repeat',
      backgroundSize: '300px 300px',
      backgroundPosition: 'center',
      opacity: 0.08,
    }}>
      {/* Repeating logo pattern background */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute pointer-events-none" style={{
            left: `${(i % 4) * 25}%`,
            top: `${Math.floor(i / 4) * 33.33}%`,
            width: '300px',
            height: '300px',
          }}>
            <Image
              src="/milyogo-watermark.png"
              alt="Milyogo background"
              width={300}
              height={300}
              className="w-full h-full object-contain opacity-10"
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
