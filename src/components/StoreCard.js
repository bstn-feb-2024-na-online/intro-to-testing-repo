function StoreCard({ address }) {
    return (
        <div className="storecard">
            Address:
            <span className="storecard__address"> {address}</span>
        </div>
    );
}

export default StoreCard;
