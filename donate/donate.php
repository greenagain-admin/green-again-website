<!DOCTYPE HTML>
<html lang='en-us'>

<head>

    <?php
        $preamble = $_SERVER['DOCUMENT_ROOT']."/public/public_preamble.php";
        include_once($preamble);
    ?>

    <meta name='description' content='Official website for Green Again.'>
    <link rel='stylesheet' type='text/css' href='work.css'>
    <title>Green Again | Our Work</title>
</head>

<body>
    <?php
        $navbar = $_SERVER['DOCUMENT_ROOT']."/navbar/navbar.php";
        include_once($navbar);
    ?>
    <div id='top' class='height-half' style='background-image: url(/img_src/work_cover.jpg)'>
        <p style='top: 60%'>
            <span class='headline-size'>Our Work</span>
            <br><br>
            <!--<span class='title-size'>Our past, current, and future projects.</span>-->
        </p>
    </div>

    <div class='section-container first-sec'>
        <div class='section-title title-size'>Ecological Restoration</div>
        <table class="work-section">
            <tr>
                <td class='work-icon-wrapper'><img class="work-icon" src='/icon_src/eco_restore_icon.png'/></td>
                <td class="work-padding-wrapper"></td>
                <td class="work-text-wrapper">
                    <div class="work-text">
                        <p>The purpose of Green Again’s projects is the “ecological restoration” of damaged rainforest reserves in Madagascar.  True restoration is more than simply replanting trees.  As defined by the Society for Ecological Restoration (SER), it is the process of assisting the recovery of an ecosystem that has been degraded, damaged, or destroyed.</p>
                        <p>Ecological restoration involves a long term commitment to the land.  We aim to restore a self-sustaining environment with the original specifies of floral and fauna. To learn about what’s involved in this process, please visit <a style='font-weight: bold' href="http://www.ser.org/resources/resources-detail-view/ser-international-primer-on-ecological-restoration" target="_blank">the SER website</a>.</p>
                    </div>
                    
                </td>
            </tr>
        </table>
    </div>
        
    <div class='green-back section-container' id='current-project'>
        <div class='section-title title-size'>Current Project</div>
        <table class="work-section">
            <tr>
                <td class="work-text-wrapper">
                    <div class="work-text">
                        <p>Our current project is to restore a section of the rainforest reserve in Parc Ivoloina that was lost due a human-caused forest fire. Parc Ivoloina is small but highly visited. It is 700 acres wide with 15,000 visitors annually, 70% of which are Malagasy. Unfortunately, the fire destroyed all tree cover across a large area, leaving only a scar of charred ground.</p>
                        <p>Our objective is to restore the rainforest canopy to this area within ten years. To date, we’ve planted 38 pioneer species and the trees are growing fast. There’s already a slight canopy forming and several exotic species such as the eucalyptus, acacia, and guava are thriving.</p>
                        <p>Another core part of our work is to collect scientific observations on the growth patterns of the tree species involved in the restoration. Our team collects and enters data rigorously in order to continually improve results. Using our data, we’ve tested 5 planting frameworks, 4 germination experiments, and several planting treatments.</p>
                    </div>
                </td>
                <td class="work-padding-wrapper"></td>
                <td class="work-icon-wrapper"><img class="work-icon" src="/icon_src/cur_proj_icon.png"> </td>
            </tr>
        </table>
    </div>

    <div class='section-container'>
        <div class='section-title title-size'>Focus on Sustainability</div>
        <table class='work-section'>
            <tr>
                <td class='work-icon-wrapper'><img class='work-icon' src='/icon_src/sustain_icon.png'/></td>
                <td class='work-padding-wrapper'></td>
                <td class='work-text-wrapper'>
                    <div class='work-text'>
                        <p>A central challenge of our work is to ensure that restored rainforest areas remain protected for the long term.  Green Again uses a three-ring approach for this:</p>
                        <p>1. Restore a centrally located rainforest reserve which can be insulated and protected by surrounding plots</p>
                        <p>2. Replant surrounding forest plots as a buffer to be sustainably logged by families in the organization as their primary source of income</p>
                        <p>3. Establish another buffering zone exterior to that for gardening and rice fields</p>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    
    <div class='section-container last-sec' id='highlights'>
        <div class='section-title title-size'>Highlights</div>
        <div>
            <div class='gallery triptych'>
                <img src='/img_src/static1.jpg'/>
            </div>

            <div class='gallery triptych'>
                <img src='/img_src/static2.jpg'/>
            </div>

            <div class='gallery triptych'>
                <img src='/img_src/static3.jpg'/>
            </div>
        </div>
        <div>
            <div class='gallery triptych'>
                <img src='/img_src/static4.jpg'/>
            </div>

            <div class='gallery triptych'>
                <img src='/img_src/static5.jpg'/>
            </div>

            <div class='gallery triptych'>
                <img src='/img_src/static6.jpg'/>
            </div>
        </div>
        <div class='pad-below-3em'>
            <div class='gallery triptych'>
                <img src='/img_src/static7.jpg'/>
            </div>

            <div class='gallery triptych'>
                <img src='/img_src/static8.jpg'/>
            </div>

            <div class='gallery triptych'>
                <img src='/img_src/static9.jpg'/>
            </div>
        </div>
    </div>

    <?php
        $footer = $_SERVER['DOCUMENT_ROOT']."/footer/footer.php";
        include_once($footer);
        $scripts = $_SERVER['DOCUMENT_ROOT']."/public/public_scripts.php";
        include_once($scripts);
    ?>
    
    <script src='work.js'></script>
    
</body>
</html>



