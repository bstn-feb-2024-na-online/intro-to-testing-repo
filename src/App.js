import StoreList from "./components/StoreList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <StoreList
                stores={[
                    { id: 1, address: "123abc" },
                    { id: 2, address: "123abc" },
                    { id: 3, address: "123abc" },
                ]}
                sale={true}
                loadData={() => {}}
            />
        </div>
    );
}

export default App;
