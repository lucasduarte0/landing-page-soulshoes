import { Rerousel } from 'rerousel';

export const Component: React.FC<CustomersProps> = ({ customers }) => {
    const customerLogo = useRef(null);

    return (
        <Container>
            <Rerousel itemRef={customerLogo}>
                {customers.map((c) => {
                    return <Img key={c.image} image={c.image} ref={customerLogo} />;
                })}
            </Rerousel>
        </Container>
    );
};