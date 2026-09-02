import { FRB } from "@/types/favorite_band"
import Image from 'next/image'

export default function FavoriteBand({ band }: { band: FRB }) {
    return (
        <article className="favorite-band">
            <Image src={band.picture} alt={band.name} width={400} height={400} />

            <h1>{band.name}</h1>
            <p>{band.description}</p>
            {band.members && (
                <>
                    <h2>Members:</h2>
                    <ul>
                        {band.members.map((member) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                </>
            )}
        </article>
    )
}