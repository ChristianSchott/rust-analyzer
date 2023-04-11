window.SIDEBAR_ITEMS = {"enum":[["SymbolKind",""]],"macro":[["_bail",""],["_format_err",""]],"mod":[["active_parameter","This module provides functionality for querying callable information about a token."],["assists","This module defines the `Assist` data structure. The actual assist live in the `ide_assists` downstream crate. We want to define the data structures in this low-level crate though, because `ide_diagnostics` also need them (fixits for diagnostics and assists are the same thing under the hood). We want to compile `ide_assists` and `ide_diagnostics` in parallel though, so we pull the common definitions upstream, to this crate."],["defs","`NameDefinition` keeps information about the element we want to search references for. The element is represented by `NameKind`. It’s located inside some `container` and has a `visibility`, which defines a search scope. Note that the reference search is possible for not all of the classified items."],["famous_defs","See [`FamousDefs`]."],["generated",""],["helpers","Random assortment of ide helpers for high-level ide features that don’t fit in any other module."],["imports",""],["items_locator","This module has the functionality to search the project and its dependencies for a certain item, by its name and a few criteria. The main reason for this module to exist is the fact that project’s items and dependencies’ items are located in different caches, with different APIs."],["label","See [`Label`]"],["line_index","`LineIndex` maps flat `TextSize` offsets into `(Line, Column)` representation."],["path_transform","See [`PathTransform`]."],["rename","Rename infrastructure for rust-analyzer. It is used primarily for the literal “rename” in the ide (look for tests there), but it is also available as a general-purpose service. For example, it is used by the fix for the “incorrect case” diagnostic."],["rust_doc","Rustdoc specific doc comment handling"],["search","Implementation of find-usages functionality."],["source_change","This modules defines type to represent changes to the source code, that flow from the server to the client."],["symbol_index","This module handles fuzzy-searching of functions, structs and other symbols by name across the whole workspace and dependencies."],["syntax_helpers",""],["traits","Functionality for obtaining data related to traits from the DB."],["ty_filter","This module contains structures for filtering the expected types. Use case for structures in this module is, for example, situation when you need to process only certain `Enum`s."],["use_trivial_constructor","Functionality for generating trivial contructors"]],"struct":[["FxHasher","A speedy hash algorithm for use within rustc. The hashmap in liballoc by default uses SipHash which isn’t quite as speedy as we want. In the compiler we’re not really worried about DOS attempts, so we use a fast non-cryptographic hash."],["LineIndexDatabaseGroupStorage__",""],["LineIndexDatabaseStorage","Representative struct for the query group."],["LineIndexQuery",""],["RootDatabase",""],["SnippetCap",""]],"trait":[["LineIndexDatabase",""]],"type":[["FxHashMap","Type alias for a hashmap using the `fx` hash algorithm."],["FxHashSet","Type alias for a hashmap using the `fx` hash algorithm."],["FxIndexMap",""],["FxIndexSet",""]]};