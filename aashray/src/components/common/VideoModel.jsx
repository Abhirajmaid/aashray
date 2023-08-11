const VideoModel = ({ visible, onClose, url }) => {
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center z-50 "
    >
      <div className=" p-9 bg-dark rounded-lg flex flex-col items-center justify-center ">
        <button className="btn bg-slate-500 mb-6 " onClick={onClose}>
          X
        </button>
        <video
          width="320"
          height="240"
          controls
          autoPlay
          className="rounded-lg "
        >
          <source src={url} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    </div>
  );
};

export default VideoModel;
