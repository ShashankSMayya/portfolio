import 'package:flutter/material.dart';
import 'package:portfolio/widgets/navbar.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: Column(


        children: [
          Container(

            child: Navbar(),
          ),

        ],

      ),

    );
  }
}
