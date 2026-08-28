import PrototypeHeader from '../prototypes/shared/PrototypeHeader';

export default function AnatomyHeader() {
  return (
    <PrototypeHeader
      title="ANATOMY OF TYPE"
      theme="light"
      onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="!bg-anatomy-bg/90 !border-anatomy-text/10 !text-anatomy-text"
      rightAction={
        <div className="font-sans text-label uppercase tracking-widest text-anatomy-accent">
          EXHIBITION
        </div>
      }
    />
  );
}