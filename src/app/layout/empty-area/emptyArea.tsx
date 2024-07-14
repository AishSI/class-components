import './emptyArea.css';

export const EmptyArea = (): React.ReactNode => {
  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="emptyArea">
      <button className="buttonReload" onClick={handleReloadPage}>
        reload page
      </button>
      <p>Oh no! You have pressed this button after all!</p>
    </div>
  );
};
