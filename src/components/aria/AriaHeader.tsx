import PrototypeHeader from '../prototypes/shared/PrototypeHeader';

export default function AriaHeader() {
  return (
    <PrototypeHeader
      title="ARIA"
      theme="dark"
      onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="!bg-aria-bg/90 !border-aria-text/10 !text-aria-text"
      rightAction={
        <div className="font-sans text-label uppercase tracking-widest text-aria-text/40">
          Index
        </div>
      }
    />
  );
}