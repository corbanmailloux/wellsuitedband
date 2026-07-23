import Image from 'next/image'

interface BackgroundImageProps {
  imageSrc: string;
  portraitSrc?: string;
  alt: string;
  containerClass?: string;
  overlayClass?: string;
  overlayClick?: (e: React.MouseEvent) => void;
}

export default function BackgroundImage({
  imageSrc,
  portraitSrc,
  alt,
  containerClass,
  overlayClass,
  overlayClick,
}: BackgroundImageProps) {
  return (
    <>
      <div className={containerClass ?? 'fixed inset-0 opacity-60'}>
        {portraitSrc ? (
          <>
            <div className="relative block md:hidden w-full h-full">
              <Image
                src={portraitSrc}
                alt={alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
                quality={85}
              />
            </div>
            <div className="relative hidden md:block w-full h-full">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
                quality={85}
              />
            </div>
          </>
        ) : (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="100vw"
          />
        )}
      </div>
      {overlayClass && (
        <div
          className={`absolute inset-0 ${overlayClass}`}
          onClick={overlayClick}
        />
      )}
    </>
  )
}
