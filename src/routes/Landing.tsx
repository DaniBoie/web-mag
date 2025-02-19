import CablesPatch from './CablesPatch'
import Home from './home';

export const Landing = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          pointerEvents: "none"
        }}
      >
        <CablesPatch />
      </div>

      <Home />
    </>
  );
}