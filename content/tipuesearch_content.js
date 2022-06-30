var tipuesearch = {"pages": [{'title': 'About', 'text': '2022 Fall \n Introduction to Computer Programming (計算機程式) \n https://www.youtube.com/c/Freecodecamp/search?query=python  ', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'ROC 國旗規格   PROC 國旗規格   USA 國旗規格 \n Gist Brython scripts \n Cango \n turtle.py \n turtle_graphics.pdf  ( source ) \n turtle_graphics_2.pdf  ( source ) \n turtle_graphics_3.pdf  ( source ) \n \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp deepmerge display_stl draw ex1 ex2 ex3 ex4 fibo fourbar guess_a_number hw1_1 hw1_2 Keycode knova1 merge3 power_lotto spur spur_w_form stl_binary_ascii stl_writer Tetris Auto Tetris turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam websocket ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'CPython', 'text': '比對兩份資料, 列出差異: \n 數列應用 \n for 重複迴圈 \n 以 utf-8 編碼讀出檔案內容 \n splitlines() 函式逐行將檔案內容放入數列 \n if 判斷式應用 \n # 兩份資料所在目錄字串\nstudlist_path = "Y:/studlist/2022spring/"\nscore_path = "Y:/score/2022/spring/"\n# score 區檔案套稿字串\nscore_file_temp = "_stud_list.txt"\n# 班級代號數列\nclasses = ["1a", "2a", "2b", "5j"]\n\n# 利用 for 迴圈, 逐班進行處理\nfor i in classes:\n    # read data from studlist\n    # 以 utf-8 編碼開啟檔案\n    with open(studlist_path + i + ".txt", encoding="utf-8") as f:\n        studlist_data = f.read().splitlines()\n    #print(studlist_data)\n    with open(score_path + i + "/" + i + score_file_temp, encoding="utf-8") as f:\n        score_list_data = f.read().splitlines()\n    #print(score_list_data)\n    for i in studlist_data:\n        stud_num = i.split("\\t")[0]\n        #print(stud_num)\n        # 列出已經不在評分名單中的學號\n        if stud_num not in score_list_data:\n            print(stud_num) \n MS Teams assignment downloaded directory rename: \n os 模組的 walk() 應用 \n next() 應用 \n 讀取檔案內容 \n splitlines() 將各行資料納入數列 \n dictionary 資料結構應用 \n for 重複迴圈應用 \n try 與 except 應用 \n os 模組的 rename() 應用 \n import os\n\n\'\'\'\nMS Teams student submitted assignment files can be downloaded through SharePoint App, but directory named as student name,\nwe may use this program to rename directory into student number\n\'\'\'\n# from https://stackoverflow.com/questions/141291/how-to-list-only-top-level-directories-in-python\n# rename directory: os.rename(source,destination)\nstud_name_list = next(os.walk(\'./cd2022_student\'))[1]\n#print(stud_name_list)\n# read data from wcm2022_5j_stud_name_email.txt\n# firstname \\t lastname \\t email\nwith open("cd2022_stud_name_email.txt", encoding="utf-8") as f:\n    data = f.read().splitlines()\n# set stud_name and stud_num into dict\nstud_dict = {}\n# skip the first line\nfor i in data[1:]:\n    line = i.split("\\t")\n    firstname = line[0]\n    lastname = line[1]\n    # get student number from email\n    stud_num = line[2].split("@")[0]\n    stud_dict[lastname+firstname] = stud_num\nprint(stud_dict)\ndir_pre = \'./cd2022_student/\'\n# loop stud_name_list and rename into stud_num\nfor i in stud_name_list:\n    try:\n        os.rename(dir_pre+i, dir_pre+stud_dict[i])\n        print("rename ", i, " into ", stud_dict[i])\n    except:\n        print(i, "no data")\n \n', 'tags': '', 'url': 'CPython.html'}, {'title': 'CAD', 'text': 'SolidWorks:  https://www.solidworks.com/   \n AutoDesk Inventor:  https://www.autodesk.com/products/inventor   \n Siemens NX:  https://www.plm.automation.siemens.com/global/en/products/nx/   \n PTC Onshape:  https://www.ptc.com/en/products/onshape   \n Solvespace:  https://solvespace.com   \n https://github.com/solvespace/solvespace  ', 'tags': '', 'url': 'CAD.html'}, {'title': 'Python for SW', 'text': 'http://wcm.cycu.org:88/github/cad2020/content/HW1_SW.html   \n import pythoncom\nimport win32com.client\nimport win32api\nimport os\n \nos.system("taskkill /IM sldworks.exe /F")\nos.system("taskkill /IM sldworks_fs.exe /F")\n \n\'\'\'\nAbout DispatchEx and Dispatch Methods:\nhttps://stackoverflow.com/questions/18648933/using-pywin32-what-is-the-difference-between-dispatch-and-dispatchex\nSource code:\nhttp://pywin32.hg.sourceforge.net/hgweb/pywin32/pywin32/file/0db1b26904d5/com/win32com/src/PyIDispatch.cpp\nDoc:\nhttps://docs.microsoft.com/en-us/dotnet/standard/native-interop/com-callable-wrapper\n \nIDispatch: Provides a mechanism for late binding to type.\nIDispatchEx:\n    Interface supplied by the runtime if the class implements IExpando. The IDispatchEx interface is an extension of the IDispatch interface that, unlike IDispatch, enables enumeration, addition, deletion, and case-sensitive calling of members.\n\'\'\'\napp = win32com.client.DispatchEx("SldWorks.Application")\n#app=win32com.client.Dispatch("SldWorks.Application")\n \n# define var to convert variables\ndef var(type, value):\n    # type needs to be string\n    # use builtin getattr() to return pythoncom.type\n    pytype = getattr(pythoncom, type)\n    return win32com.client.VARIANT(pytype, value)\n \n# for two-type variable convert\n# is there any three-type variant?\ndef var2(type1, type2, value):\n    pytype1 = getattr(pythoncom, type1)\n    pytype2 = getattr(pythoncom, type2)\n    return win32com.client.VARIANT(pytype1|pytype2, value)\n     \ndef part(app, fileName, sketchName, dimName, newDim, newFileName):\n    arg1 = var("VT_I4", 1)\n    # GetMassProperties( ((3, 1), (16387, 3)))\n    #arg1 = win32com.client.VARIANT(pythoncom.VT_I4, 1)\n    arg2 = var("VT_I4", -1)\n \n    # 0. need the most important obj app\n    #app=win32com.client.Dispatch("SldWorks.Application")\n    # use relative directory to open part\n    # 1. open part file, need the path of the part file (need the file name)\n    #doc=app.OpenDoc(".\\\\block2.SLDPRT", 1)\n    doc=app.OpenDoc(os.path.join(os.getcwd(), fileName), 1)\n    # save part as binary stl\n    # can we save part as ASCII stl as well?\n    #doc.SaveAs2(".\\\\block2.stl", 0, True, False)\n    # the parameter VARIANT list for SelectByID2\n    # can we automate the VARIANT conversion?\n    # 2. use the sketch to select the SKETCH (need the sketch name)\n    #SelectByID2((8, 1), (8, 1), (5, 1), (5, 1), (5, 1), (11, 1), (3, 1), (9, 1), (3, 1))\n    #arg3 = var("VT_BSTR", "Sketch1")\n    arg3 = var("VT_BSTR", sketchName)\n    arg4 = var("VT_BSTR", "SKETCH")\n    arg5 = var("VT_R8", 0)\n    arg6 = var("VT_R8", 0)\n    arg7 = var("VT_R8", 0)\n    arg8 = var("VT_BOOL", False)\n    arg9 = var("VT_I4", 0)\n    arg10 = var("VT_DISPATCH", None)\n    arg11 = var("VT_I4", 0)\n    # select Sketch1 first\n    status = doc.Extension.SelectByID2(arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11)\n    # select DIMENSION to to modify\n    # 3. use the dimension name @ sketch name @ part file name\n    # to select the DIMENSION to modify\n    #arg12 = var("VT_BSTR", "Width@Sketch1@block2.SLDPRT")\n    arg12 = var("VT_BSTR", dimName+"@"+sketchName+"@"+fileName)\n    arg13 = var("VT_BSTR", "DIMENSION")\n    status = doc.Extension.SelectByID2(arg12, arg13, arg5, arg6, arg7, arg8, arg9, arg10, arg11)\n    #Dim swDimension As SldWorks.Dimension\n    # 4. to bring out the parameter to modify, need the dimension name and \n    # sketch name\n    #swDimension = doc.Parameter("Width@Sketch1")\n    swDimension = doc.Parameter(dimName+"@"+sketchName)\n    # the dimension unit is in meter\n    # 5. need the new value of the parameter\n    #swDimension.SystemValue = 0.50\n    swDimension.SystemValue = newDim\n    # 6. do the final house keeping process, clear selection and rebuild the part\n    sel = doc.ClearSelection2 \n    sel = True\n    status = doc.EditRebuild()\n    arg31 = var("VT_I4", 1)\n    arg32 = var2("VT_I4", "VT_BYREF", 3)\n    # 7. get the volume of the new part\n    volumn = doc.Extension.GetMassProperties(arg31, arg32)\n    #print(volumn[3]*1E9, "mm*3")\n    # 8. save the new part (need the new part file name)\n    #doc.SaveAs2(".\\\\block3.SLDPRT", 0, True, False)\n    doc.SaveAs2(os.path.join(os.getcwd(), "html/" + newFileName + ".SLDPRT"), 0, True, False)\n    # save jpg of part\n    doc.EditRebuild()\n    arg33 = var("VT_BSTR", "Isometric")\n    doc.ShowNamedView(arg33)\n    doc.ViewZoomtofit2()\n    doc.SaveAs3(os.path.join(os.getcwd(), "html/" + newFileName + ".jpg"), 0, 0)\n    # mm*3\n    return str(round(volumn[3]*1E9, 3)) + " mm*3"\nhtml = "以下零件採 SolidWorks 2017 SP 2.0 教育版繪製:<br /><br /><table border=\'1\' cellpadding=\'5\'><tr><th>Number</th><th>Part</th><th>Jpg</th><th>Width</th><th>Volume</th></tr>"\nindex = 0\nfor i in range(1, 11):\n    dim = i*0.002\n    blockVolume = part(app, "31_step.SLDPRT", "Sketch1", "Width", dim, "31_" + str(i))\n    print("31_" + str(i) + ".SLDPRT, dim= " + str(round(dim, 3)) +", volume= " + blockVolume)\n    index += 1\n    newFileName = "31_" + str(i)\n    html += \'\'\'<tr>\n    <td>\'\'\' + str(index) +\'\'\'</td>\n    <td><a href="./../downloads/sw_macro/html/\'\'\' + newFileName + \'\'\'.SLDPRT">\'\'\' + newFileName + \'\'\'.SLDPRT</a></td>\n    <td><img width="300" src="./../downloads/sw_macro/html/\'\'\' + newFileName + \'\'\'.jpg"></img></td>\n    <td>\'\'\' + str(round(dim*1000, 2)) + \'\'\' mm </td>\n    <td>\'\'\' + blockVolume + \'\'\'</td>\n    </tr>\n    \'\'\'\nhtml += "</table>"\n# save part.html\nwith open("./html/part.html", "w", encoding="utf-8") as f:\n     f.write(html)\n      \n\'\'\'\nfor assembly\n        swModelDocExt.SelectByID2("", "EDGE", -0.439825991092107, 7.07350481263802E-02, 0.40982045578545, true, 2, null, 0);\n        swModelDocExt.SelectByID2("", "EDGE", -0.219003008311574, 0.073085842475507, 0.549481823985616, true, 4, null, 0);\n        swModelDocExt.SelectByID2("Part-3@AssemModel", "COMPONENT", 0, 0, 0, true, 1, null, 0);\n        swFeature = (Feature)swFeatureManager.FeatureLinearPattern2(3, 40 / 1000, 0, 0, false, true, "NULL", "NULL", false);\n        assemblyModel.ClearSelection2(true);\n\'\'\'\nos.system("taskkill /IM sldworks.exe /F")\nos.system("taskkill /IM sldworks_fs.exe /F")\n# now the SolidWorks is embedding \n', 'tags': '', 'url': 'Python for SW.html'}, {'title': 'Python for INV', 'text': '針對 HW1 使用 AutoDesk Inventor 2019 教育版繪零件圖者, 可以利用下列 Python 程式修改零件參數, 取零件影像圖並計算零件體積: \n import pythoncom\nimport win32com.client\nimport win32api\nimport os\n \n# Open Inventor\ninvApp = win32com.client.Dispatch("Inventor.Application")\n#print(invApp)\ninvApp.Visible = True\n \ninvApp.SilentOperation = True\n \n# Set location of assembly\npartName = \'C:/tmp/Part1.ipt\'\n \n# Open the model\noDoc = invApp.Documents.Open(partName)\n# use UserParameters to access the user parameters\n#oUserParams = oDoc.ComponentDefinition.Parameters.UserParameters\n#oNewParam = oUserParams.AddByExpression("x", "9", "mm")\n# use Item() to get the model parameter named "d0"\nd0 = oDoc.ComponentDefinition.Parameters.Item("d0")\n# Expression can add dimension unit\n#d0.Expression = "2 cm"\n# Value use the default system unit: cm\nd0.Value = 2\n# use Update() method to get the new part volume\noDoc.Update()\n# fit the active view and save the part image\ninvApp.ActiveView.Fit(True)\noDoc.SaveAs("C:/tmp/Part1.png", True)\nprint(oDoc.ComponentDefinition.MassProperties.Volume)\n#invApp.Quit() \n', 'tags': '', 'url': 'Python for INV.html'}, {'title': 'Python for NX', 'text': '針對 HW1 使用 NX12.0.2 教育版繪零件圖者, 可以利用下列 Python 程式修改零件參數, 取零件影像圖並計算零件體積: \n 參考零件:  block.prt \n NX12 NXOpen Python API Reference \n # nx_open_part.py\n# 導入 NXOpen\nimport NXOpen\nimport NXOpen.UF\nimport NXOpen.Gateway\n   \ndef main():\n    # 取得目前開啟的工作階段\n    theSession = NXOpen.Session.GetSession()\n    theUfSession = NXOpen.UF.UFSession.GetUFSession()\n      \n    # 建立 ListingWindow\n    listWin= theSession.ListingWindow\n    # 開啟零件檔案\n    basePart1 = theSession.Parts.OpenBaseDisplay("c:/tmp/block.prt")\n    workPart = theSession.Parts.Work\n    unit1 = workPart.UnitCollection.FindObject("MilliMeter")\n    # height\n    p7 = workPart.Expressions.FindObject("p7")\n    # width\n    p8 = workPart.Expressions.FindObject("p8")\n    # length\n    p9 = workPart.Expressions.FindObject("p9")\n    workPart.Expressions.EditWithUnits(p7, unit1, "30")\n    workPart.Expressions.EditWithUnits(p8, unit1, "60")\n    workPart.Expressions.EditWithUnits(p9, unit1, "90")\n    theSession.UpdateManager.DoUpdate(0)\n    #saveStatus1 = workPart.SaveAs("c:/tmp/block_new.prt")\n    #saveStatus1.Dispose()\n    # initialize list to hold bodies\n    theBodyTags = []\n   \n    for x in workPart.Bodies:\n        if x.IsSolidBody:\n            theBodyTags.append(x.Tag)\n      \n    # 準備輸出 ASCII 格式 STL 零件檔案\n    sTLCreator1 = theSession.DexManager.CreateStlCreator()\n    sTLCreator1.AutoNormalGen = True\n    sTLCreator1.ChordalTol = 0.08\n    sTLCreator1.AdjacencyTol = 0.08\n    sTLCreator1.OutputFile = "C:\\\\tmp\\\\block_ascii.stl"\n    # Binary STL: NXOpen.STLCreatorOutputTypeEnum.Binary\n    sTLCreator1.OutputType = NXOpen.STLCreatorOutputTypeEnum.Text\n    # 已知 body1 命名\n    body1 = workPart.Bodies.FindObject("EXTRUDE(2)")\n    added1 = sTLCreator1.ExportSelectionBlock.Add(body1)\n    nXObject1 = sTLCreator1.Commit()\n    sTLCreator1.Destroy()\n  \n    # 開啟所建立的 ListingWindow\n    listWin.Open()\n    listWin.WriteLine("number of solid bodies: " + str(len(theBodyTags)))\n   \n    (massProps, Stats) = theUfSession.Modeling.AskMassProps3d(theBodyTags, len(theBodyTags), 1, 4, .03, 1, [0.99,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0])\n    listWin.WriteLine("units: kg, mm")\n    listWin.WriteLine("surface area: " + str(massProps[0]))\n    listWin.WriteLine("volume: " + str(massProps[1]*1E9))\n    # 在 ListingWindow 中寫入字串\n    listWin.WriteLine("Hello, NXOpen")\n    listWin.Close()\n     \n    # 將零件檔案 fit 之後, export 出 png 檔案\n    theUI = NXOpen.UI.GetUI()\n    imageExportBuilder1 = theUI.CreateImageExportBuilder()\n \n    custombackgroundcolor1 = [None] * 3\n    custombackgroundcolor1[0] = 1.0\n    custombackgroundcolor1[1] = 1.0\n    custombackgroundcolor1[2] = 1.0\n \n    imageExportBuilder1.SetCustomBackgroundColor(custombackgroundcolor1)\n    imageExportBuilder1.FileFormat = NXOpen.Gateway.ImageExportBuilder.FileFormats.Png\n    imageExportBuilder1.FileName = "c:\\\\tmp\\\\block.png"\n \n    imageExportBuilder1.BackgroundOption = NXOpen.Gateway.ImageExportBuilder.BackgroundOptions.Original\n \n    imageExportBuilder1.EnhanceEdges = False\n    imageExportBuilder1.RegionMode = False\n    # fit view 後 commit export png\n    workPart.ModelingViews.WorkView.Fit()\n    nXObject6 = imageExportBuilder1.Commit()\n \n    imageExportBuilder1.Destroy()\n      \nif __name__ == "__main__":\n    main() \n', 'tags': '', 'url': 'Python for NX.html'}, {'title': 'CAE', 'text': 'Mechatronic control system design and simulation: \n Coppeliasim: \n https://www.coppeliarobotics.com/ \n https://www.coppeliarobotics.com/helpFiles/en/remoteApiFunctionsPython.htm \n https://www.coppeliarobotics.com/helpFiles/en/zmqRemoteApiOverview.htm \n https://github.com/CoppeliaRobotics   \n Webots: \n https://cyberbotics.com/   \n https://github.com/cyberbotics/webots   \n FEM: \n sfepy: \n https://sfepy.org/doc-devel \n https://github.com/sfepy/sfepy \n https://sfepy.org/doc-devel/examples/gallery.html \n Netgen/NGSolve: \n https://www.math.uzh.ch/compmath/fileadmin/user/stas/compmath/Abschlussarbeiten/Arnold_Noam/myManual.pdf \n https://ngsolve.org/ \n https://github.com/NGSolve/ngsolve \n https://github.com/NGSolve/netgen \n', 'tags': '', 'url': 'CAE.html'}, {'title': 'MS Graph', 'text': 'Microsoft Graph client library for Python \n https://github.com/microsoftgraph/msgraph-sdk-python-core \n MS Teams: \n Microsoft Teams is the ultimate hub for teamwork and intelligent communications. Built on the strength and scale of Microsoft 365 with over 120 million users, Microsoft Teams delivers chat-based collaboration, meetings, calling, and enterprise voice features. \n MS Graph: \n Microsoft Graph makes it easy to create large numbers of teams and populate them with users and channels, by automating the creation and management of teams, channels, tabs, and apps. Microsoft Graph also lets you find and archive the teams you are no longer using. This is the same API that the Microsoft Teams Admin Center and Teams PowerShell cmdlets are built on. \n \n More MS Teams related video: \n https://www.youtube.com/c/Microsoft365Developer/search?query=Teams \n 安裝模組: \n pip install msgraph-core azure-identity \n Target: \n MS Graph SDK for MS Teams: \n https://docs.microsoft.com/en-us/graph/teams-concept-overview \n Login:\xa0 \n https://developer.microsoft.com/en-us/microsoft-365/dev-program \n', 'tags': '', 'url': 'MS Graph.html'}, {'title': 'MS Teams', 'text': 'Granting access via Azure AD App-Only | Microsoft Docs \n Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), has been retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the  https://accounts.accesscontrol.windows.net  hostname (which is not impacted by this retirement). For more information, see  Impact of Azure Access Control retirement for SharePoint Add-ins . \n Download MS Teams Student submitted files: \n \n Login to Onedrive. \n From App Launcher, select SharePoint -> My sites. \n Search for the specific class -> Site contents -> Student Work -> Submitted Files, click Download to download all submitted files or use Ctrl to select multiple students and click Download to download associated files. \n \n', 'tags': '', 'url': 'MS Teams.html'}, {'title': 'cmsimde', 'text': 'https://github.com/mdecycu/cmsimde   \n cmsimde Template: \n https://github.com/mdecycu/cmstemplate  ', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'VSCode', 'text': 'EBooks: \n Visual Studio Code Distilled  \n Optimizing Visual Studio Code for Python Development  \n Portable mode of Visual Studio Code: \n https://code.visualstudio.com/docs/editor/portable  (338 MB) \n Download .zip file and add a data directory to enable the Portable mode of VSCode. \n Leo for VSCode: \n https://marketplace.visualstudio.com/items?itemName=boltex.leointeg \n', 'tags': '', 'url': 'VSCode.html'}]};