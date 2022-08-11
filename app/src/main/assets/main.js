//var R = com.js.R;
import(com.js.R);


activity.on("OnCreate", function(bundle) {
        activity.setContentView(R.layout.activity_main);
        var b = findView.id(R.id.btn);
        b.setOnClickListener(activity);
});

activity.on("OnClick", function(view) {
         switch (view.getId()){
              case R.id.btn:
                  print(view);
                  window.alert(view);
                  break;
       }
});

