import React, {useRef} from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Service() {
    const linkRef = useRef(null)

    const goto = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="App">
        {/* <header className="App-header">
            <nav>TESTING</nav>
        </header> */}
        <Navbar />
        <h1>This is Service page.</h1>
        <h3 onClick={() => goto(linkRef.current)}>Go-to</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque. Arcu dui vivamus arcu felis. Risus at ultrices mi tempus imperdiet nulla. Vulputate mi sit amet mauris commodo quis imperdiet massa. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Donec enim diam vulputate ut pharetra. Vitae semper quis lectus nulla at volutpat diam ut. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Arcu bibendum at varius vel pharetra. Elementum tempus egestas sed sed risus pretium quam. Pulvinar proin gravida hendrerit lectus. Nulla at volutpat diam ut. Faucibus in ornare quam viverra orci sagittis eu volutpat.
        </p>
        <p>
        Dictum at tempor commodo ullamcorper a lacus vestibulum. Faucibus in ornare quam viverra orci sagittis. Quis hendrerit dolor magna eget est lorem. At erat pellentesque adipiscing commodo. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Id aliquet risus feugiat in ante metus. Iaculis at erat pellentesque adipiscing commodo. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Viverra orci sagittis eu volutpat. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper. Pulvinar elementum integer enim neque volutpat. Consequat nisl vel pretium lectus quam. Sodales ut etiam sit amet nisl purus in.
        </p>
        <p>
        Sit amet aliquam id diam maecenas ultricies mi eget mauris. Eget mi proin sed libero enim sed faucibus turpis. Tortor condimentum lacinia quis vel eros donec ac. Adipiscing diam donec adipiscing tristique risus nec feugiat. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Egestas integer eget aliquet nibh praesent tristique magna sit. Cras fermentum odio eu feugiat. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Posuere lorem ipsum dolor sit.
        </p>
        <p>
        Pellentesque habitant morbi tristique senectus et netus. Ornare massa eget egestas purus viverra accumsan in nisl. Commodo ullamcorper a lacus vestibulum sed. Est velit egestas dui id ornare arcu odio ut. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Vitae auctor eu augue ut lectus. Cursus mattis molestie a iaculis at. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Aliquam purus sit amet luctus. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Dictumst quisque sagittis purus sit amet. Venenatis a condimentum vitae sapien. Varius vel pharetra vel turpis nunc eget.
        </p>
        <p>
        Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Tellus integer feugiat scelerisque varius. Amet consectetur adipiscing elit pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Vestibulum lectus mauris ultrices eros in. Leo duis ut diam quam nulla porttitor. Id ornare arcu odio ut sem. Sem et tortor consequat id porta nibh venenatis. Ultrices tincidunt arcu non sodales neque sodales ut. Massa tempor nec feugiat nisl pretium fusce id.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque. Arcu dui vivamus arcu felis. Risus at ultrices mi tempus imperdiet nulla. Vulputate mi sit amet mauris commodo quis imperdiet massa. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Donec enim diam vulputate ut pharetra. Vitae semper quis lectus nulla at volutpat diam ut. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Arcu bibendum at varius vel pharetra. Elementum tempus egestas sed sed risus pretium quam. Pulvinar proin gravida hendrerit lectus. Nulla at volutpat diam ut. Faucibus in ornare quam viverra orci sagittis eu volutpat.
        </p>
        <p>
        Dictum at tempor commodo ullamcorper a lacus vestibulum. Faucibus in ornare quam viverra orci sagittis. Quis hendrerit dolor magna eget est lorem. At erat pellentesque adipiscing commodo. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Id aliquet risus feugiat in ante metus. Iaculis at erat pellentesque adipiscing commodo. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Viverra orci sagittis eu volutpat. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper. Pulvinar elementum integer enim neque volutpat. Consequat nisl vel pretium lectus quam. Sodales ut etiam sit amet nisl purus in.
        </p>
        <p>
        Sit amet aliquam id diam maecenas ultricies mi eget mauris. Eget mi proin sed libero enim sed faucibus turpis. Tortor condimentum lacinia quis vel eros donec ac. Adipiscing diam donec adipiscing tristique risus nec feugiat. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Egestas integer eget aliquet nibh praesent tristique magna sit. Cras fermentum odio eu feugiat. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Posuere lorem ipsum dolor sit.
        </p>
        <p>
        Pellentesque habitant morbi tristique senectus et netus. Ornare massa eget egestas purus viverra accumsan in nisl. Commodo ullamcorper a lacus vestibulum sed. Est velit egestas dui id ornare arcu odio ut. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Vitae auctor eu augue ut lectus. Cursus mattis molestie a iaculis at. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Aliquam purus sit amet luctus. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Dictumst quisque sagittis purus sit amet. Venenatis a condimentum vitae sapien. Varius vel pharetra vel turpis nunc eget.
        </p>
        <p>
        Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Tellus integer feugiat scelerisque varius. Amet consectetur adipiscing elit pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Vestibulum lectus mauris ultrices eros in. Leo duis ut diam quam nulla porttitor. Id ornare arcu odio ut sem. Sem et tortor consequat id porta nibh venenatis. Ultrices tincidunt arcu non sodales neque sodales ut. Massa tempor nec feugiat nisl pretium fusce id.
        </p>
        <a href="http://reactjs.org" target="_blank" ref={linkRef}>Learn ReactJS</a>
        <Footer />
        </div>
    );
}

export default Service;