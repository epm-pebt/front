import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerDefinition from './stories/assets/swagger.json';

const SwaggerDocs = () => {
    return <SwaggerUI spec={swaggerDefinition} />;
};

export default SwaggerDocs;
