package com.example.tc_demo_new;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.WindowManager;
import android.webkit.WebSettings.RenderPriority;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.init();
		super.setIntegerProperty("loadUrlTimeoutValue", 60000);
		getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
		super.loadUrl("file:///android_asset/www/views/index.html");
		this.appView.getSettings().setRenderPriority(RenderPriority.HIGH);
		this.appView.getSettings().setPluginState(android.webkit.WebSettings.PluginState.ON_DEMAND);
	}

}
