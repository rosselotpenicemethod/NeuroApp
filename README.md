# ROSSELOT PENICE METHOD

Neurocognitive Performance System mobile app built with React Native, Expo, TypeScript, Firebase Authentication, Firestore, AsyncStorage, React Navigation and Reanimated.

## Estado

La estructura completa y el codigo fuente estan generados para revision manual. No se ejecuto compilacion local fuera del sandbox.

## Configuracion Firebase

1. Crea un proyecto Firebase.
2. Activa Authentication con Email/Password.
3. Crea una app Web en Firebase para obtener las credenciales.
4. Copia `.env.example` a `.env` y completa las variables `EXPO_PUBLIC_FIREBASE_*`.
5. Publica reglas equivalentes a `firestore.rules`.

## Autorizacion privada

La app no permite entrar solo por tener credenciales validas. Despues de Firebase Auth, consulta Firestore:

- `authorizedUsers/{uid}` con `{ active: true, role: "athlete" }`
- o `authorizedEmails/{emailNormalizado}` con `{ active: true, role: "athlete" }`

Si el email esta autorizado, el servicio enlaza automaticamente el UID en `authorizedUsers/{uid}`.

## Colecciones Firestore

- `authorizedUsers/{uid}`: control de acceso por UID.
- `authorizedEmails/{email}`: control de acceso previo al primer login.
- `users/{uid}`: perfil operativo del usuario.
- `users/{uid}/sessions/{sessionId}`: resultados historicos por juego.

Cada sesion guarda:

- fecha servidor y fecha cliente
- categoria
- score
- tiempo de reaccion
- errores
- precision
- metricas especificas por tarea

## Scripts

Despues de revisar y autorizar instalacion/compilacion:

```bash
npm install
npm run typecheck
npm start
npm run android
npm run ios
```

## Estructura

### Raiz

- `App.tsx`: punto de entrada. Monta `AuthProvider`, `StatusBar` y `AppNavigator`.
- `package.json`: dependencias Expo, React Native, Firebase, Navigation, Reanimated y scripts.
- `app.json`: metadata instalable iOS/Android, bundle id, package id y scheme.
- `babel.config.js`: preset Expo y plugin obligatorio de Reanimated.
- `tsconfig.json`: TypeScript estricto y alias `@/*`.
- `expo-env.d.ts`: tipos Expo y variables `process.env`.
- `.env.example`: plantilla de credenciales Firebase.
- `.gitignore`: exclusiones de dependencias, builds y secretos.
- `firestore.rules`: reglas sugeridas para acceso privado por usuario.

### `/firebase`

- `firebaseConfig.ts`: inicializa Firebase App, Auth con persistencia AsyncStorage y Firestore. Lee credenciales desde variables Expo.

### `/services`

- `AuthContext.tsx`: contexto global de sesion. Hidrata usuarios, expone login, recuperacion y logout.
- `authService.ts`: login seguro con Firebase Auth y autorizacion Firestore por UID/email.
- `analyticsService.ts`: guarda y lee sesiones neurocognitivas en `users/{uid}/sessions`.

### `/navigation`

- `types.ts`: rutas tipadas del stack.
- `AppNavigator.tsx`: navegacion protegida. Muestra `Login` si no hay usuario autorizado y dashboard/juegos si lo hay.

### `/components`

- `ScreenShell.tsx`: layout base con fondo negro mate y gradiente sobrio.
- `BrandLogo.tsx`: marca tipografica centrada del metodo.
- `AppButton.tsx`: boton premium con iconos Ionicons, variantes primaria/ghost/danger.
- `AppTextInput.tsx`: input seguro con icono y estilo dorado.
- `CategoryCard.tsx`: tarjeta de categoria cognitiva.
- `MetricCard.tsx`: tarjeta compacta para metricas.
- `StatPill.tsx`: indicador breve para KPIs.
- `ProgressBars.tsx`: evolucion semanal.
- `CognitiveRadar.tsx`: radar cognitivo SVG.

### `/screens`

- `LoginScreen.tsx`: acceso privado con email, contrasena, recuperacion, validacion y mensajes seguros.
- `DashboardScreen.tsx`: dashboard principal con cinco categorias, evolucion semanal, progreso mensual, radar y ranking.
- `AnalyticsScreen.tsx`: vista historica con ultimas sesiones, ranking personal y metricas agregadas.

### `/games`

- `GameFrame.tsx`: contenedor comun de pantallas de juego.
- `GameSummary.tsx`: resumen final y estado de guardado Firestore.
- `useSessionRecorder.ts`: hook comun para construir y persistir sesiones.
- `DividedAttentionGame.tsx`: tarea dual visual/textual con reaccion, precision y errores dual-task.
- `ConcentrationGame.tsx`: sustained attention task con omisiones, impulsividad y fatiga progresiva.
- `MemoryGame.tsx`: n-back visual simplificado con span, latencia y consistencia.
- `SelectiveAttentionGame.tsx`: busqueda de target con distractores, inhibicion y velocidad discriminativa.
- `ProblemSolvingGame.tsx`: matrices abstractas progresivas con nivel, aciertos y tiempo de resolucion.

### `/utils`

- `theme.ts`: tokens visuales premium: negro mate, dorado, superficies y tipografia.
- `types.ts`: tipos compartidos de categorias, sesiones, radar y evolucion.
- `cognitive.ts`: categorias, calculo de score, clamps, promedios y agregados analytics.
- `validators.ts`: normalizacion y validacion de email/contrasena.

### `/assets`

- `README.md`: reserva para iconos, splash, logo final y assets visuales exportados.
