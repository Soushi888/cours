struct Point {
  x: i32,
  y: i32,
}

fn main() {
  let x = Point { x: 1, y: 2 };
  let y = &x;

  println!("x: {}, y: {}", x.x, y.x);
}
