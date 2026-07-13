import "./background.css";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 isometric-dots -z-10" aria-hidden="true">
      <div className="glow-orange-top-left" />
      <div className="glow-orange-bottom-right" />
    </div>
  );
}
