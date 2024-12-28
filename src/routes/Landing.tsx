import CablesPatch from './CablesPatch'

export const Landing = () => {
  return (
    <>
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <CablesPatch />
      </div>
      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black'
      }}>Testing</h1>
    </>
  );
}