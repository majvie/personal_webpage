export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","assets/pdf/NTNU_Intro.pdf","assets/pdf/Vieweg_DieKulturrevolutionInChina.pdf","assets/pdf/Vieweg_Oceanography_Trip_Report.pdf","assets/pdf/Vieweg_TrajectoryPrediction.pdf","assets/pdf/e11806443_Berechnung.pdf","assets/pdf/lab_kinematic_chains.pdf","favicon.svg"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.f358dd8d.js","app":"_app/immutable/entry/app.7f2429ae.js","imports":["_app/immutable/entry/start.f358dd8d.js","_app/immutable/chunks/index.f109835d.js","_app/immutable/chunks/singletons.c30d232e.js","_app/immutable/entry/app.7f2429ae.js","_app/immutable/chunks/index.f109835d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
