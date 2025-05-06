import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="">
          <div>
            <h1 className="text-8xl">Welcome</h1>
          </div>
          <div>
            <p>to my page, my name is Nikola</p>
            <p className="w-150">
              art cupcake tart icing bonbon donut. Marshmallow pastry
              gingerbread marshmallow tootsie roll candy canes powder lemon
              drops. Cake brownie cupcake candy gummies sweet roll shortbread
              lemon drops sweet. Gummi bears gingerbread lemon drops cake
              tootsie roll candy. Croissant cake candy canes tootsie roll
              shortbread macaroon chupa chups marzipan. Dessert pastry pie candy
              canes jujubes bonbon danish pastry. Dessert lollipop chocolate bar
              powder chocolate cake chupa chups.{" "}
            </p>
          </div>
        </div>
        <div className="">
          <p className="border solid rounded-[100%] h-100 w-100">Image</p>
        </div>
      </div>
    </div>
  );
}
