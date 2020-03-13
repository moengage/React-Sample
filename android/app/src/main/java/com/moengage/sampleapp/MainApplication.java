package com.moengage.sampleapp;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.moengage.core.Logger;
import com.moengage.core.MoEngage;
import com.moengage.react.MoEInitializer;
import com.moengage.react.MoEReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
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
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNGestureHandlerPackage(),
          new VectorIconsPackage(),
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
    MoEngage moEngage =
        new MoEngage.Builder(this, "Your App Id")
            .setNotificationSmallIcon(R.drawable.icon)
            .setNotificationLargeIcon(R.drawable.ic_launcher)
            .setLogLevel(Logger.VERBOSE)
            .optOutNavBar()
            .enableLocationServices()
            .enableLogsForSignedBuild()
            .setNotificationType(R.integer.notification_type_multiple)
            .optOutDefaultInAppDisplay()
            .build();
    MoEInitializer.initialize(moEngage);
    //MoEngage.initialise(moEngage);
  }
}