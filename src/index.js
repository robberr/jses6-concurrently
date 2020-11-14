import external from './message';
import app from './app';
external();
app.listen(app.get('port'), () => console.log('Server on port', app.get('port')))

