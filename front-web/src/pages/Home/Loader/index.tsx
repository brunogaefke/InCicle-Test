import ContentLoader from 'react-content-loader'

const Loader = () => (
    <ContentLoader
        viewBox="0 0 600 160"
        height={160}
        width={400}
        backgroundColor="transparent"
        className='loader'
    >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
    </ContentLoader>
)


export default Loader


