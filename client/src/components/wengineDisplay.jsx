export default function WengineDisplay({imgUrl, wengine}) {
    return (
        <div className="wengine">
            <img src={imgUrl} alt={wengine.name} title={wengine.name} />

        </div>
    );
}