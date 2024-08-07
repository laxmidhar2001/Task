
import logo from "../assets/i3.jpg";

function Welcompage() {
  return (
    <div className="flex flex-col min-h-fit">
    
      <div className="flex flex-1">
        
        <main className="flex-1 flex items-center justify-center bg-background p-40">
          <div className="flex flex-col items-center justify-center w-full max-w-md">
            <img
              alt="TableSprint logo"
              src={logo}
              className="mb-1"
              style={{ height: "70%", width: "70%" }} // Adjusted to 1/2 of the original size
            />
            <p className="mt-2 text-lg text-muted-foreground text-center">
              Welcome to TableSprint admin
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Welcompage;
