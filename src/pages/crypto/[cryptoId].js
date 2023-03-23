import Head from 'next/head'

export async function getServerSideProps (context) {
    const {cryptoId} = context.params;
    const response = await fetch (`https://api.coincap.io/v2/assets/${cryptoId}`);
    const data = await response.json();

    return{
        props: {
            cripto:data.data,
        },
    };
}

export default function CryptoDet ({cripto}) {
    return(
        <div>
            <Head>
                <title>{cripto.name}</title>
            </Head>
            <h1>Crypto Detail</h1>
                <h2>{cripto.name} - {cripto.symbol} </h2>
                <p> Price: {cripto.priceUsd}</p>
                <br />
                <p> Supply: {cripto.supply}</p>
                <p> Max Supply: {cripto.maxSupply}</p>
                <p> Market Cap: {cripto.marketCapUsd}</p>
                <p> Volume: {cripto.volumeUsd24Hr}</p>
                <p> Change Percentage: {cripto.changePercent24Hr}</p>
        </div>
    );
}
