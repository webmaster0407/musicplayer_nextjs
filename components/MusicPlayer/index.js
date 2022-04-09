
  return (
    <div className="App">
      <WaveSurfer plugins={plugins} onMount={handleWSMount}>
        <WaveForm id="waveform" hideCursor cursorColor="transparent">
          {regions &&
            regions.map((regionProps) => (
              <Region
                onUpdateEnd={handleRegionUpdate}
                key={regionProps.id}
                {...regionProps}
              />
            ))}
          {markers &&
            markers.map((marker, index) => {
              return (
                <Marker
                  key={index}
                  {...marker}
                  onClick={(...args) => {
                    console.log("onClick", ...args);
                  }}
                  onDrag={(...args) => {
                    console.log("onDrag", ...args);
                  }}
                  onDrop={(...args) => {
                    console.log("onDrop", ...args);
                  }}
                />
              );
            })}
        </WaveForm>
        <div id="timeline" />
      </WaveSurfer>
      <Buttons>
        <Button onClick={play}>Play / Pause</Button>
      </Buttons>
    </div>
  );
}
