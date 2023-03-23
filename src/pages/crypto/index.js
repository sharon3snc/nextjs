import Link from 'next/link';

export async function getServerSideProps(context) {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data= await response.json();

    return {
        props: {
            monedas: data.data,
        },
    };
}

export default function Cripto ({monedas}) {
    return (
        <div>
            <h2>Listado de Criptomonedas</h2>
            <ul>
                {monedas.map((moneda)=>(
                    <li key={moneda.id}> 
                        <Link href={`crypto/${moneda.id}`}>
                        {moneda.name} - {moneda.priceUsd} 
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

