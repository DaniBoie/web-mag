import { Component } from "react";

/* global CABLES */
declare const CABLES: {
  exportedPatch: any;
  Patch: new (options: any) => any;
};

type PatchOptions = {
  prefixAssetPath?: string;
  jsPath?: string;
  glCanvasId?: string;
  glCanvasResizeToWindow?: boolean;
  canvas?: {
    alpha?: boolean;
    premultipliedAlpha?: boolean;
  };
  patch?: any;
  onPatchLoaded?: (patch: any) => void;
  onFinishedLoading?: (patch: any) => void;
};

type CablesPatchProps = {
  canvasId?: string;
  patchDir?: string;
  patchOptions?: PatchOptions;
};

export default class CablesPatch extends Component<CablesPatchProps> {
  private canvasId: string;
  private patchDir: string;
  private patchOptions: PatchOptions;

  constructor(props: CablesPatchProps) {
    super(props);
    this.canvasId = props.canvasId || "glcanvas";
    this.patchDir = props.patchDir || `${process.env.PUBLIC_URL}/patch`;
    this.patchOptions = {
      prefixAssetPath: this.patchDir,
      jsPath: `${this.patchDir}/js/`,
      glCanvasId: this.canvasId,
      glCanvasResizeToWindow: true,
      canvas: { alpha: true, premultipliedAlpha: true },
      ...props.patchOptions,
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = `${this.patchDir}/js/patch.js`;
    script.async = true;
    script.onload = this._initPatch.bind(this);
    document.body.appendChild(script);
  }

  render() {
    return <canvas id={this.canvasId} tabIndex={1}></canvas>;
  }

  private _initPatch() {
    const patchOptions = this.patchOptions;
    if (!patchOptions.patch) patchOptions.patch = (CABLES as any).exportedPatch;
    if (!patchOptions.onPatchLoaded)
      patchOptions.onPatchLoaded = this._patchInitialized.bind(this);
    if (!patchOptions.onFinishedLoading)
      patchOptions.onFinishedLoading = this._patchFinishedLoading.bind(this);
    (CABLES as any).patch = new (CABLES as any).Patch(patchOptions);
  }

  private _patchInitialized(patch: any) {
    // You can now access the patch object (patch), register variable watchers, and so on
    console.log(`${this.patchDir} initialized`);
  }

  private _patchFinishedLoading(patch: any) {
    // The patch is ready now, all assets have been loaded
    console.log(`${this.patchDir} finished loading`);
  }
}
