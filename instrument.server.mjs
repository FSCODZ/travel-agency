import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
 dsn: "https://639271966587e83873d5bd580e2e4c20@o4509314947743744.ingest.de.sentry.io/4509314952003664", 
 // Adds request headers and IP for users, for more info visit:
 // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
 sendDefaultPii: true,
 
 integrations: [nodeProfilingIntegration()],
 tracesSampleRate: 1.0, // Capture 100% of the transactions
 profilesSampleRate: 1.0, // profile every transaction
});
