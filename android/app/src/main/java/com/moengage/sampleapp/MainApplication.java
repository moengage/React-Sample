package com.moengage.sampleapp;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.moengage.core.LogLevel;
import com.moengage.core.MoEngage;
import com.moengage.core.config.GeofenceConfig;
import com.moengage.core.config.LogConfig;
import com.moengage.core.config.NotificationConfig;
import com.moengage.react.MoEInitializer;
import com.moengage.react.MoEReactPackage;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.asList(
          new MainReactPackage(),
          new MoEReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    MoEngage.Builder moEngage =
        new MoEngage.Builder(this, "Enter Your App Id")
            .configureNotificationMetaData(new NotificationConfig(
                R.drawable.icon,
                R.drawable.ic_launcher,
                R.color.notification_color,
                true
            )).configureLogs(new LogConfig(
                LogLevel.VERBOSE,
                true
            )).configureGeofence(new GeofenceConfig(
                true
            ));
    MoEInitializer.INSTANCE.initializeDefaultInstance(getApplicationContext(), moEngage);

    //MoEngage.initialise(moEngage);
  }
}