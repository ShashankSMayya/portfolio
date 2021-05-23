import 'package:flutter/material.dart';

class Navbar extends StatelessWidget {
  const Navbar({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraint) {
      if (constraint.maxWidth <= 600)
        return MobileNavBar();
      else if (constraint.maxWidth <= 992) return TabletNavBar();
      return DesktopNavBar();
    });
  }
}

class MobileNavBar extends StatelessWidget {
  const MobileNavBar({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Icon(Icons.home),
          IconButton(onPressed: (){}, icon: Icon(Icons.menu))
        ],
      ),
    );
  }
}

class TabletNavBar extends StatelessWidget {
  const TabletNavBar({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      padding: const EdgeInsets.all(8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          //Logo
          IconButton(onPressed: () {}, icon: Icon(Icons.home)),
          Row(
            children: [
              Text('Home'),
              SizedBox(
                width: 20,
              ),
              Text('About'),
              SizedBox(
                width: 20,
              ),
              Text('Skills'),
              SizedBox(
                width: 20,
              ),
              Text('Projects'),
              SizedBox(
                width: 20,
              ),
              Text('Contact Me')
            ],
          )
        ],
      ),
    );
  }
}

class DesktopNavBar extends StatelessWidget {
  const DesktopNavBar({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      color: Colors.black38,
      padding: const EdgeInsets.all(8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          //Logo
          IconButton(onPressed: () {}, icon: Icon(Icons.home)),
          Row(
            children: [
              Text('Home'),
              SizedBox(
                width: 20,
              ),
              Text('About'),
              SizedBox(
                width: 20,
              ),
              Text('Skills'),
              SizedBox(
                width: 20,
              ),
              Text('Projects'),
              SizedBox(
                width: 20,
              ),
              Text('Contact Me')
            ],
          )
        ],
      ),
    );
  }
}
