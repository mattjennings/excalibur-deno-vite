import "./style.css";
import * as ex from "https://esm.sh/excalibur@0.30.3";

const game = new ex.Engine({
  resolution: {
    width: 1280,
    height: 720
  },
  canvasElementId: "game",
  displayMode: ex.DisplayMode.FitContainerAndFill,
});

const logoImage = new ex.ImageSource("/ex-logo.png");
const loader = new ex.Loader();
loader.addResource(logoImage);

game.start(loader)
  .then(() => {
    class HelloExcalibur extends ex.Actor {
      constructor() {
        super({
          x: 640,
          y: 200,
        });
        this.graphics.use(
          new ex.GraphicsGroup({
            members: [
              {
                graphic: new ex.Text({
                  text: "Hello Excalibur",
                  color: ex.Color.White,
                  font: new ex.Font({
                    size: 50,
                  }),
                }),
                offset: ex.vec(0, 0),
              },
              {
                graphic: logoImage.toSprite({ scale: ex.vec(0.25, 0.25) }),
                offset: ex.vec(360, -10),
              },
            ],
          }),
        );
      }
    }

    game.add(
      new HelloExcalibur(),
    );
  });
