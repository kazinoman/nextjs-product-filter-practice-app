function Practicepage() {
  interface PracticePageProps {
    onPageChange?: (page: number) => void;
  }
  const Practicepage = ({ onPageChange }: PracticePageProps) => {
    const handlePagination = (page: number) => {
      console.log("pagination", page);
      onPageChange?.(page);
    };

    return (
      <div>
        <h1>Practice Page</h1>
        <div>
          <button
            onClick={() => {
              handlePagination(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handlePagination(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handlePagination(3);
            }}
          >
            {" "}
          </button>
        </div>
      </div>
    );
  };
  return <Practicepage />;
}
