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
        <picture className="block h-full w-full">
          {portraitSrc ? <source media="(max-width: 767px)" srcSet={portraitSrc} /> : null}
          <img
            src={imageSrc}
            alt={alt}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </picture>
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
