import FavoriteBand from "@/components/favorite_band";
import { favorite_band } from "@/Data/favorite_band_data";

export default function favoriteBands() {
    return(
        <div>
        {favorite_band.map((band) => (
            <FavoriteBand key={band.name} band={band} />
        ))}
        </div>
    )
}